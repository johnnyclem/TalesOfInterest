module DashboardHelper

  def subscribers(podcast)
    uri = URI.parse("http://api.uri.lv/feeds/subscribers.json")
    params = { :key => Settings.first.uri_key, :token => Settings.first.uri_token, :feed => podcast.downcase }
    uri.query = URI.encode_www_form(params)
    response = Net::HTTP.get_response(uri)
    if stats = JSON.parse(response.body)['stats']
      subscribers = stats.first['greader'] + stats.first['other']
    else
      "ERROR"
    end
  end

  def subscribers_chart_data(podcast)
    uri = URI.parse("http://api.uri.lv/feeds/subscribers.json")
    params = { :key => Settings.first.uri_key, :token => Settings.first.uri_token, :feed => podcast.downcase }
    uri.query = URI.encode_www_form(params)
    response = Net::HTTP.get_response(uri)
    if stats = JSON.parse(response.body)['stats']
      [
        {label: "Google Reader", value: stats.first['greader']},
        {label: "Other", value: stats.first['other']}
      ]
    end
  end

  def traffic_data
    traffic = JSON.parse(open("https://secure.gaug.es/gauges/#{Settings.first.gauges}/traffic",
        'X-Gauges-Token' => Settings.first.gauges_key).read)

    unless traffic['urls']['older'].nil?
      older_traffic = JSON.parse(open(traffic['urls']['older'],
        'X-Gauges-Token' => Settings.first.gauges_key).read)
      traffic = older_traffic['traffic'] + traffic['traffic']
      
      ending = traffic.size - 1
      beginning = ending - 30
      traffic = traffic[beginning..ending]
    end
    
    traffic
  end
end

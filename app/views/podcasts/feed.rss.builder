xml.instruct! :xml, version: "1.0"
xml.rss version: "2.0" do
  xml.channel do
    xml.title @podcast.name
    xml.link podcast_url(@podcast)
    xml.description @podcast.description
    xml.language "de"
    xml.pubDate @episodes.first.created_at.to_s(:rfc822)
    xml.lastBuildDate @episodes.first.created_at.to_s(:rfc822)
    xml.itunes :author, @podcast.author
    xml.itunes :summary, @podcast.description
    xml.itunes :keywords, @podcast.keywords
    if @podcast.explicit
        xml.itunes :explicit, 'yes'
    else
        xml.itunes :explicit, 'clean'
    end
    xml.itunes :image, :href => @podcast.artwork
    xml.itunes :owner do
      xml.itunes :name, @podcast.author
      xml.itunes :email, 'mail@talesofinterest.de'
    end
    xml.itunes :block, 'no'
    xml.itunes :category, :text => @podcast.category.match(/(.*)\:/)[1] do
      xml.itunes :category, :text => @podcast.category.match(/\:\s(.*)/)[1]
    end

    @episodes.each do |episode|
      xml.item do
        xml.title episode.title
        xml.link episode_url(@podcast, episode)
        xml.guid episode_url(@podcast, episode)
        xml.pubDate episode.created_at.to_s(:rfc822)
        xml.description episode.description
        xml.enclosure :url => episode.file, :length => episode.file_size, :type => 'audio/x-m4a'
        xml.content :encoded, raw("<p>#{episode.description}</p>
" + episode.stringify_show_notes)
        xml.itunes :author, @podcast.author
        xml.itunes :duration, episode.playtime
        xml.itunes :subtitle, truncate(episode.description, :length => 150)
        xml.itunes :summary, episode.description
        xml.itunes :keywords, @podcast.keywords
        xml.itunes :image, :href => @podcast.artwork
        if episode.explicit
            xml.itunes :explicit, 'yes'
        else
            xml.itunes :explicit, 'no'
        end
      end
    end
  end
end
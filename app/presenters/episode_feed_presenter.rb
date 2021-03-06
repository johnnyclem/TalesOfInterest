class EpisodeFeedPresenter < BasePresenter
  presents :episode
  delegate :full_title, to: :episode

  def clean_description
    episode_presenter.send(:clean_description)
  end

  def truncated_clean_description
    episode_presenter.send(:truncated_clean_description)
  end

  def duration
    episode_presenter.send(:duration)
  end

  def uri
    episode_presenter.send(:uri)
  end

  def file
    if file = episode.audio_files.find_by_media_type("mp4")
    elsif file = episode.audio_files.find_by_media_type("mp3")
    end
    file      
  end

  def file_type
    if file.media_type == "mp4"
      'audio/x-m4a'
    elsif file.media_type = "mp3"
      'audio/mpeg'
    end
  end

  def content
    content = episode.description
    if episode.show_notes.size > 0
      content << "</p>" + stringify_show_notes.html_safe
    end
    markdown(content)
  end

  def published_at
    episode.published_at.to_s(:rfc822)
  end

  def author
    episode.podcast.author
  end

  def keywords
    episode.podcast.keywords
  end

  def artwork
    podcast_presenter.send(:feed_artwork)
  end

  def explicit
    if episode.explicit
      'yes'
    else
      'no'
    end
  end

private

  def episode_presenter
    EpisodePresenter.new(episode, h)
  end

  def podcast_presenter
    PodcastPresenter.new(episode.podcast, h)
  end

  def stringify_show_notes
    "<p>Show Notes:</p><ul>#{stringify(episode.show_notes.order('position'))}</ul><p>"
  end

  def stringify(array)
    string = ""
    array.each do |object|
      string << "<li><a href=\"#{object.url}\">#{object.name}</a></li>"
    end
    string
  end

end
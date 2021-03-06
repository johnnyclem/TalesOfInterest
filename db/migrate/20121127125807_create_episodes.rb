class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.integer :number
      t.string :title
      t.text :description
      t.string :playtime
      t.string :file
      t.integer :file_size
      t.boolean :explicit
      t.integer :podcast_id
      t.string :slug
      t.datetime :published_at
      t.boolean :draft, default: true

      t.timestamps
    end
  end
end

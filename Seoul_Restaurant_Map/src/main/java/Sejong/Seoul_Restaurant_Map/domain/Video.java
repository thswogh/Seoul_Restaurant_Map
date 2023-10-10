package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

import java.sql.Date;


@Entity
@Table(name = "videos")
public class Video {
    @Id
    private String video_id;

    @ManyToOne
    @JoinColumn(name = "playlist_id")
    private Playlists playlist;
    private String youtube_url;
    private String thumb_img;
    private String video_title;
    private int video_views;
    private Date date;
}

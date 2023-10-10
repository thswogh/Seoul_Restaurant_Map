package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "playlists")
public class Playlists {
    @Id
    private String playlist_id;
    @OneToMany(mappedBy = "playlist")
    private List<Video> videos;

    @ManyToOne
    @JoinColumn(name = "channel_id")
    private Channels channels;
    private String playlist_name;
    private Boolean is_video;
}

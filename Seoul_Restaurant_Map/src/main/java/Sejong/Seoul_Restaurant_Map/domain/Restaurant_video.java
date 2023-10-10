package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurant_video")
public class Restaurant_video {
    @Id
    private String link_id;

    @ManyToOne
    @JoinColumn(name = "video_id")
    private Video video;

    @ManyToOne
    @JoinColumn(name = "restaurant_name")
    private Restaurant restaurant;
}

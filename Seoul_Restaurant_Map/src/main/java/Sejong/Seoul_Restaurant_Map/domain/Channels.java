package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.Set;

@Entity
@Table(name = "channels")
public class Channels {
    @Id
    private String channel_id;
    @OneToMany(mappedBy = "channels")
    private Set<Playlists> playlists;
    private String channel_name, channel_thumb;
    private int subscriber_count, views;
}

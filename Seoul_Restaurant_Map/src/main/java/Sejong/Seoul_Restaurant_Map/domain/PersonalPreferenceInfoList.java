package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="user_list_features")
public class PersonalPreferenceInfoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_list_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member member;

    @OneToMany(mappedBy = "user_list_link_id")
    private Set<PersonalPreferenceList> restaurant_set;

    private String list_nickname, list_object;
    private int list_size, list_color;
}

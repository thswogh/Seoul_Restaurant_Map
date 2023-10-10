package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="users")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String user_name, user_email, user_password;

    @OneToMany(mappedBy = "member")
    private Set<PersonalPreferenceInfoList> infoList;
}

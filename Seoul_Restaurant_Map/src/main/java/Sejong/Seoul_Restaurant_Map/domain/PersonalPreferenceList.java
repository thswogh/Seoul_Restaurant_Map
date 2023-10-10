package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="user_lists")
public class PersonalPreferenceList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_list_link_id;

    @ManyToOne
    @JoinColumn(name = "user_list_id")
    private PersonalPreferenceInfoList info;

    @ManyToOne
    @JoinColumn(name = "restaurant_name")
    private Restaurant restaurant;

    private String restaurant_description;

    private int rank;

    @DateTimeFormat
    private Date upload_in_list_date;
}
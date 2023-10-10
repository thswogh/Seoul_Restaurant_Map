package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurants")
public class Restaurant {
    @Id
    private String restaurant_name;

    private String address;
    private double location_x, location_y;
    private String place_url;
}

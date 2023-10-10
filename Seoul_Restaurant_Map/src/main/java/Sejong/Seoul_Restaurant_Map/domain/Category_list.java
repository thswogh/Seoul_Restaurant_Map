package Sejong.Seoul_Restaurant_Map.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "category_list")
public class Category_list {
    @Id
    @OneToMany()
    private String category;
}

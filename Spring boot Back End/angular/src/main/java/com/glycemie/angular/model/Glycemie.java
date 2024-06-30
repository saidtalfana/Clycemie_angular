package com.glycemie.angular.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;


@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "diabetes")
public class Glycemie {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id ;
    @Column (name="date")
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private LocalDate date;
    @DateTimeFormat(pattern = "HH:MM")
    @Column (name="time")
    private LocalTime time;
    @Column (name="level")
    private double level;

}

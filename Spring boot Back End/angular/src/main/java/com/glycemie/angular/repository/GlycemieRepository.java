package com.glycemie.angular.repository;

import com.glycemie.angular.model.Glycemie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GlycemieRepository extends JpaRepository<Glycemie,Integer> {
}

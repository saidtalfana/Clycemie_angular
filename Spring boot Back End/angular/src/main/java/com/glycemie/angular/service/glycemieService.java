package com.glycemie.angular.service;

import com.glycemie.angular.model.Glycemie;
import com.glycemie.angular.repository.GlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class glycemieService {

    @Autowired
    private GlycemieRepository glycemieRepository;

    public List<Glycemie> getGlycemies() {
        List<Glycemie> gl = new ArrayList<Glycemie>();
        glycemieRepository.findAll().forEach(a -> gl.add(a));
        return gl;
    }

    public Glycemie getGlycemieById(int id){
    return glycemieRepository.findById(id).get();
    }

    public void save(Glycemie glycemie){
        glycemieRepository.save(glycemie);
    }
    public void delete(int id){
        glycemieRepository.deleteById(id);
    }
    public void update(Glycemie glycemie){
        glycemieRepository.save(glycemie);
    }
}

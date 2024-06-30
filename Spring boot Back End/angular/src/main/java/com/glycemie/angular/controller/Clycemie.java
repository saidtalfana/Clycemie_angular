package com.glycemie.angular.controller;

import com.glycemie.angular.repository.GlycemieRepository;
import com.glycemie.angular.model.Glycemie;
import com.glycemie.angular.service.glycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class Clycemie {

    @Autowired
    private glycemieService glycemieservice;

    @GetMapping("/glycemie")
    private List<Glycemie> getAllGlycemie(){
        return glycemieservice.getGlycemies();
    }
@DeleteMapping("/delete/{id}")
    private void deleteGlycemie(@PathVariable("id") int id){
    glycemieservice.delete(id);
}

@PostMapping("/add")
    private int saveGlycemie(@RequestBody Glycemie glycemie){
    glycemieservice.save(glycemie);
        return glycemie.getId();
}
@PutMapping("/update/{id}")
    private Glycemie update(@PathVariable int id,@RequestBody Glycemie glycemie) {
    if (id == glycemie.getId()) 
        glycemieservice.update(glycemie);
//    } else if (id != glycemie.getId()) {
//        System.out.println("not found");
//
//    }
    return glycemie;
}

}

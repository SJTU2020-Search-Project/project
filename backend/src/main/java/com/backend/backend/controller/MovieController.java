package com.backend.backend.controller;

import com.backend.backend.entity.MovieEntity;
import com.backend.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/findMovie/{id}")
    public MovieEntity findMovie(@PathVariable("id") Integer id){
        System.out.println("Searching id:" + id);
        return movieService.findMovieById(id);
    }
}

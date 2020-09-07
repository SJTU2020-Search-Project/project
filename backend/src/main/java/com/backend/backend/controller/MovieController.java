package com.backend.backend.controller;

import com.backend.backend.daoimpl.Py;
import com.backend.backend.entity.MovieEntity;
import com.backend.backend.entity.UserEntity;
import com.backend.backend.service.MovieService;
import com.backend.backend.entity.entry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/findMovie/{id}")
    public MovieEntity findMovie(@PathVariable("id") Integer id){
        System.out.println("Searching id:" + id);
        return movieService.findMovieById(id);
    }

    @RequestMapping(value = "/external_search")
    // @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public List<entry> external_search(@RequestParam("title") String title) {
        System.out.println("Searching title:"+title);
        Py py = new Py();
        return py.getpython(title);
    }

    @RequestMapping(value = "/search")
//    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    public List<MovieEntity> searchMovie(@RequestParam("title") String title){
        System.out.println("Searching title:"+title);
        return movieService.findMovieByTitle(title);
}

    @PostMapping(value = "/addMovie")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public MovieEntity addMovie(@RequestBody MovieEntity movieEntity){
        return movieService.addMovie(movieEntity);
    }

    @DeleteMapping(value = "/del/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void del(@PathVariable("id") Integer id){
        movieService.deleteMovieById(id);
        System.out.println(id + " is deleted.");
    }

    @PostMapping(value = "/update")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') ")
    public void updateMovie(@RequestBody MovieEntity movieEntity){
        movieService.updateMovie(movieEntity);

    }


}

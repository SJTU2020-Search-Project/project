package com.backend.backend.service;

import com.backend.backend.entity.MovieEntity;

import java.util.List;

public interface MovieService {
    MovieEntity findMovieById (Integer id);
    List<MovieEntity> findMovieByTitle(String title);
    MovieEntity addMovie (MovieEntity movieEntity);
    void deleteMovieById(Integer id);
    MovieEntity updateMovie(MovieEntity movieEntity);
}

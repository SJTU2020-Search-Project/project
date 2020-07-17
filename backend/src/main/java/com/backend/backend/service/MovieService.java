package com.backend.backend.service;

import com.backend.backend.entity.MovieEntity;

public interface MovieService {
    MovieEntity findMovieById (Integer id);
}

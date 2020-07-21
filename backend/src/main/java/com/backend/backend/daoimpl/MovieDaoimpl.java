package com.backend.backend.daoimpl;

import com.backend.backend.dao.MovieDao;
import com.backend.backend.entity.MovieEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.backend.backend.repository.MovieRepository;

import java.util.List;

@Repository
public class MovieDaoimpl implements MovieDao {
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public MovieEntity findOne(Integer id) {
        return  movieRepository.getOne(id);
    }

    @Override
    public List<MovieEntity> findByTitle(String title) {
    return movieRepository.findMovieEntitiesByTitleLike(title);
    }
}

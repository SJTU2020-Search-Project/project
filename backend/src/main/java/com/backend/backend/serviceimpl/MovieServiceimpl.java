package com.backend.backend.serviceimpl;

import com.backend.backend.dao.MovieDao;
import com.backend.backend.entity.MovieEntity;
import com.backend.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MovieServiceimpl implements MovieService {
    @Autowired
    private MovieDao movieDao;

    @Override
    public MovieEntity findMovieById(Integer id) {
        return movieDao.findOne(id);
    }

    @Override
    public List<MovieEntity> findMovieByTitle(String title) {
        return movieDao.findByTitle(title);
    }

    @Override
    public MovieEntity addMovie(MovieEntity movieEntity) {
        return movieDao.insertOne(movieEntity);
    }

    @Override
    @Transactional
    public void deleteMovieById(Integer id) {
        movieDao.deleteOne(id);
    }


    @Override
    @Transactional
    public void updateMovie(MovieEntity movieEntity) {
        movieDao.updateOne(movieEntity);
    }


}

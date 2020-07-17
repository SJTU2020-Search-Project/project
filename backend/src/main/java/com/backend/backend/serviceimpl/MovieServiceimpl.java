package com.backend.backend.serviceimpl;

import com.backend.backend.dao.MovieDao;
import com.backend.backend.entity.MovieEntity;
import com.backend.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceimpl implements MovieService {
    @Autowired
    private MovieDao movieDao;

    @Override
    public MovieEntity findMovieById(Integer id) {
        return movieDao.findOne(id);
    }



}

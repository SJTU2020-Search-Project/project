package com.backend.backend.daoimpl;

import com.backend.backend.dao.MovieDao;
import com.backend.backend.entity.MovieEntity;
import org.hibernate.annotations.SQLUpdate;
import org.hibernate.annotations.UpdateTimestamp;
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

    @Override
    public MovieEntity insertOne(MovieEntity movieEntity) {
        return movieRepository.save(movieEntity);
    }

    @Override
    public void deleteOne(Integer id) {
        movieRepository.deleteById(id);
    }

    @Override
    public void updateOne(MovieEntity movieEntity) {
       movieRepository.updateMovieById(movieEntity.getMovieId(),movieEntity.getTitle(),movieEntity.getDir(),movieEntity.getActors(),movieEntity.getGenre(),movieEntity.getNation(),movieEntity.getLanguage(),movieEntity.getDate(),movieEntity.getRuntime(),movieEntity.getRating(),movieEntity.getSummary(),movieEntity.getVotes());
    }

}

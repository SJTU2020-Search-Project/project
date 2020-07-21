package com.backend.backend.repository;

import com.backend.backend.entity.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieRepository extends JpaRepository<MovieEntity,Integer> {
    @Query("select m from MovieEntity m where m.title like %:title%")
    List<MovieEntity> findMovieEntitiesByTitleLike(@Param("title") String title);
}

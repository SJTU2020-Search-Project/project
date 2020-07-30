package com.backend.backend.repository;

import com.backend.backend.entity.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieRepository extends JpaRepository<MovieEntity,Integer> {
    @Query("select m from MovieEntity m where m.title like %:title%")
    List<MovieEntity> findMovieEntitiesByTitleLike(@Param("title") String title);

    @Query(value = "delete from MovieEntity where movieId = ?1")
    @Modifying
    void deleteById(Integer id);


    @Query( "update MovieEntity m set m.title =?2 ,m.dir=?3,m.actors = ?4 , m.genre=?5,m.nation=?6,m.language=?7,m.date=?8,m.runtime=?9, m.rating=?10, m.summary=?11 ,m.votes=?12 where m.movieId =?1")
    @Modifying
    void updateMovieById(Integer movieId,  String title ,String dir,String actors,String genre,String nation,String language,String date,String runtime,Double rating,String summary,Integer votes);
}

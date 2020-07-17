package com.backend.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "movie", schema = "douban")
@Getter
@Setter
public class movie {
    @Id
    @Column(name = "movie_id")
    private int movieId;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic






    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }



}

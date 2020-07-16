package com.backend.backend.entity;

import javax.persistence.*;


@Entity
@Table(name = "movie", schema = "douban")
public class movie {
    private int movieId;
    private String title;



    @Id
    @Column(name = "movie_id")

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }



}

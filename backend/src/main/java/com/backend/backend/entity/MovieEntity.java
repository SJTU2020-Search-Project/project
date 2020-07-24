package com.backend.backend.entity;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;

@Entity
@Proxy(lazy=false)
@Table(name = "movie",schema = "douban")
public class MovieEntity {
    private int movieId;
    private String title;
    private String dir;
    private String actors;
    private String genre;
    private String nation;
    private String language;
    private String date;
    private String runtime;
    private Double rating;
    private String summary;
    private Integer votes;

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

    @Basic
    @Column(name = "dir")
    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    @Basic
    @Column(name = "actors")
    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    @Basic
    @Column(name = "genre")
    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Basic
    @Column(name = "nation")
    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    @Basic
    @Column(name = "language")
    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Basic
    @Column(name = "date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Basic
    @Column(name = "runtime")
    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    @Basic
    @Column(name = "rating")
    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "summary")
    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Basic
    @Column(name = "votes")
    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MovieEntity that = (MovieEntity) o;

        if (movieId != that.movieId) return false;
        if (title != null ? !title.equals(that.title) : that.title != null) return false;
        if (dir != null ? !dir.equals(that.dir) : that.dir != null) return false;
        if (actors != null ? !actors.equals(that.actors) : that.actors != null) return false;
        if (genre != null ? !genre.equals(that.genre) : that.genre != null) return false;
        if (nation != null ? !nation.equals(that.nation) : that.nation != null) return false;
        if (language != null ? !language.equals(that.language) : that.language != null) return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;
        if (runtime != null ? !runtime.equals(that.runtime) : that.runtime != null) return false;
        if (rating != null ? !rating.equals(that.rating) : that.rating != null) return false;
        if (summary != null ? !summary.equals(that.summary) : that.summary != null) return false;
        if (votes != null ? !votes.equals(that.votes) : that.votes != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = movieId;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (dir != null ? dir.hashCode() : 0);
        result = 31 * result + (actors != null ? actors.hashCode() : 0);
        result = 31 * result + (genre != null ? genre.hashCode() : 0);
        result = 31 * result + (nation != null ? nation.hashCode() : 0);
        result = 31 * result + (language != null ? language.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (runtime != null ? runtime.hashCode() : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        result = 31 * result + (summary != null ? summary.hashCode() : 0);
        result = 31 * result + (votes != null ? votes.hashCode() : 0);
        return result;
    }
}

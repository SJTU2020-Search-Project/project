package com.backend.backend.service;

import com.backend.backend.BackendApplication;
import com.backend.backend.entity.MovieEntity;
import com.backend.backend.repository.MovieRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.matchers.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static java.sql.JDBCType.NULL;
import static org.mockito.Mockito.*;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BackendApplication.class)
public class MovieServiceTest {
    @Autowired
    MovieService movieServiceimpl;
    MovieRepository movieRepository;
//    @MockBean
//    MovieRepository movieRepository;
    @Test
    public void questTest(){
        MovieEntity A = movieServiceimpl.findMovieById(1);
        Assert.assertEquals(1,A.getMovieId());
    }

    @Test
    public void addTest(){
        MovieEntity A = new MovieEntity();
        A.setMovieId(20000);
        movieServiceimpl.addMovie(A);
        Assert.assertEquals(A,movieServiceimpl.findMovieById(20000));
    }
    @Test
    public void updateTest(){
        MovieEntity A = new MovieEntity();
        A.setMovieId(20000);
        A.setActors("abc");
        movieServiceimpl.updateMovie(A);
        Assert.assertEquals(A,movieServiceimpl.findMovieById(20000));

    }

    @Test
    public void deleteTest(){
        MovieEntity A = new MovieEntity();
        A.setMovieId(20000);
        movieServiceimpl.deleteMovieById(20000);

    }

}

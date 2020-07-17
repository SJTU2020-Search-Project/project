package com.backend.backend.service;

import com.backend.backend.BackendApplication;
import com.backend.backend.entity.MovieEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BackendApplication.class)
public class MovieServiceTest {
    @Autowired
    MovieService movieServiceimpl;

    @Test
    public void questTest(){
        MovieEntity A = movieServiceimpl.findMovieById(1);
        System.out.println("标题:" + A.getTitle() + "    导演:" + A.getDir() );

    }

}

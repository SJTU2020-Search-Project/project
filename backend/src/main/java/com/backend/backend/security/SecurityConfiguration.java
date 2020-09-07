package com.backend.backend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;





@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private SearchUserDetailsService searchUserDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.formLogin()                    //  定义当需要用户登录时候，转到的登录页面。
                .loginPage("/login.html")           // 设置登录页面
                .loginProcessingUrl("/user/login")  // 自定义的登录接口
                .and()
                .authorizeRequests()        // 定义哪些URL需要被保护、哪些不需要被保护
                .antMatchers("/login.html").permitAll() ;  // 设置所有人都可以访问登录页面

        http.authorizeRequests()
                .antMatchers("/search").permitAll()
                .antMatchers("/signup").permitAll()
                .anyRequest().authenticated();

        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.csrf().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        auth
                .userDetailsService(searchUserDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

}

package com.backend.backend.security;

import com.backend.backend.entity.UserEntity;
import com.backend.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SearchUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.getOne(username);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String pwd =encoder.encode(user.getPassword());

        if (pwd == null) {
            throw new UsernameNotFoundException(String.format("User with the username %s doesn't exist", username));
        }

        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(user.getRole());

        return new org.springframework.security.core.userdetails.User(username,pwd,authorities);
    }
}

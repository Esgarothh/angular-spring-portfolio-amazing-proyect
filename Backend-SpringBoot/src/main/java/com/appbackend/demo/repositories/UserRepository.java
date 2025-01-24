package com.appbackend.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appbackend.demo.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
package com.appbackend.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appbackend.demo.models.User;
import com.appbackend.demo.repositories.UserRepository;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://127.0.0.1:4200") // Allow Angular access
public class ViewController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/view1")
    public List<String> getView1Data() {

        //UserController userController = new UserController();
        List<User> usuarios = userRepository.findAll();
        System.out.print(usuarios);
        List<String> userStrings = usuarios.stream()
        .map(user -> user.getName()) // Replace "getName()" with the desired field or format
        .toList();

        return userStrings; // Return the list of strings
    }

    @PostMapping("/view2")
    public ResponseEntity<Map<String, String>> addNewUser(@RequestBody User newUser) {
        userRepository.save(newUser);

        // Return a JSON response
        Map<String, String> response = new HashMap<>();
        response.put("message", "User added successfully!");
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/view3")
    public List<String> getView3Data() {
        return Arrays.asList("View3-Item1", "View3-Item2", "View3-Item3");
    }
}

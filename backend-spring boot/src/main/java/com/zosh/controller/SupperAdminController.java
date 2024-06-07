package com.zosh.controller;

import java.util.List;

import com.zosh.Exception.RestaurantException;
import com.zosh.model.Restaurant;
import com.zosh.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.zosh.model.User;
import com.zosh.repository.UserRepository;
import com.zosh.service.UserService;
@RestController
@RequestMapping("/api/admin")
public class SupperAdminController {

	@Autowired
	private UserService userService;

	@Autowired
	private RestaurantService restaurantService;

	@GetMapping("/customers")
	public ResponseEntity<List<User>> getAllCustomers() {
		List<User> users = userService.findAllUsers();
		return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
	}

@GetMapping("/restaurants")
public ResponseEntity<List<Restaurant>> getAllRestaurants() {
	List<Restaurant> restaurants = restaurantService.findAllRestaurants();
	return new ResponseEntity<>(restaurants, HttpStatus.ACCEPTED);
}

	@DeleteMapping("/restaurants/{id}")
	public ResponseEntity<Void> deleteRestaurant(@PathVariable Long id) throws RestaurantException {
		restaurantService.deleteRestaurant(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		userService.deleteUserById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

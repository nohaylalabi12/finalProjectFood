package com.zosh.controller;

import com.zosh.Exception.OrderException;
import com.zosh.Exception.UserException;
import com.zosh.model.Order;
import com.zosh.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/driver")
public class DriverController {
    @Autowired
    private OrderService orderService;


    @GetMapping("/orders/received/{state}")
    public ResponseEntity<List<Order>> getPendingOrdersByState(@PathVariable String state) {
        List<Order> receivedOrders = orderService.findPendingOrdersByState(state);
        return ResponseEntity.ok(receivedOrders);
    }

    @PostMapping("/orders/{id}/accept")
    public ResponseEntity<Void> acceptOrder(@PathVariable Long id, @RequestParam Long driverId) throws UserException, OrderException {
        boolean success = orderService.assignOrderToDriver(id, driverId);
        if (success) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(400).build();
        }
    }
    @PostMapping("/orders/{id}/status")
    public ResponseEntity<Void> updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        try {
            orderService.updateOrder(id, status);
            return ResponseEntity.ok().build();
        } catch (OrderException e) {
            return ResponseEntity.status(400).body(null);
        }
    }

}
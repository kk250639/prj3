package com.example.backend.controller;

import com.example.backend.dto.boardDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/board")
public class BoardController {

    @PostMapping("add")
    @ResponseBody
    public String add(@RequestBody boardDto dto) {
        System.out.println(dto);

        return null
    }

}

package com.example.backend.controller;

import com.example.backend.dto.BoardDto;
import com.example.backend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("add")
    @ResponseBody
    public String add(@RequestBody BoardDto dto) {
        boardService.add(dto);

        return null;
    }

}

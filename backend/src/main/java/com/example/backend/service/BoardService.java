package com.example.backend.service;

import com.example.backend.dto.boardDto;
import com.example.backend.entity.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService {

    public void add(boardDto dto) {
        Board board = new Board();

    }
}

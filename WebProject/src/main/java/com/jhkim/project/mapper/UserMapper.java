package com.jhkim.project.mapper;

import java.util.Map;

import org.mybatis.spring.annotation.MapperScan;

import com.jhkim.project.dto.UserDTO;
@MapperScan("userMapper")
public interface UserMapper {	
	public UserDTO selectUserData(Map<String,String> param);
	public UserDTO insertUserData(Map<String,String> param);
	public UserDTO updateUserData(Map<String,String> param);
	public UserDTO deleteUserData(Map<String,String> param);
}

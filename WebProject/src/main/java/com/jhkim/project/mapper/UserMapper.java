package com.jhkim.project.mapper;

import java.util.Map;

import org.mybatis.spring.annotation.MapperScan;

import com.jhkim.project.dto.UserDTO;
import com.jhkim.project.param.LoginParam;
@MapperScan("userMapper")
public interface UserMapper {	
	public UserDTO selectUserData(LoginParam param);
	public UserDTO insertUserData(LoginParam param);
	public UserDTO updateUserData(LoginParam param);
	public UserDTO deleteUserData(LoginParam param);
}

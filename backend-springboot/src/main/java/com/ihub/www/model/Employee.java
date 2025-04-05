package com.ihub.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;   //This package contains all the annotations and support classes you need as a user of lombok.
import lombok.NoArgsConstructor;

@Entity
@Table(name="employees")
@Data				//All together now: A shortcut for @ToString, @EqualsAndHashCode, @Getter on all fields, and @Setter on all non-final fields, and @RequiredArgsConstructor!
@NoArgsConstructor  //Constructors made to order: Generates constructors that take no arguments, one argument per final / non-nullfield, or one argument for every field
@AllArgsConstructor
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //This lets MySQL handle the auto-increment on its own.
	private long id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String email;
}
//java.sql.SQLException: Field 'id' doesn't have a default value
// means that your database is expecting a value for the id field, but you're not providing one — and it's not auto-generating it, which it should if AUTO_INCREMENT is set properly.


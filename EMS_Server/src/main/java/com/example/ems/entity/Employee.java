/**
 * 
 */
package com.example.ems.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.ems.constants.Gender;
import com.example.ems.constants.ProgrammingLanguage;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author Nazmul Hasan
 *
 */
@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotEmpty(message = "Name is required field")
	@JsonProperty("name")
	private String name;

	@JsonProperty("contact_number")
	@NotEmpty(message = "Contact Number is required field")
	@Column(unique = true)
	private String contactNumber;

	@JsonProperty("email")
	@Column(unique = true)
	@NotEmpty(message = "Email is required field")
	@Email
	private String email;

	@NotNull
	@JsonProperty("gender")
	private Gender gender;

	@NotEmpty(message = "Date of birth is required field")
	@JsonProperty("date_of_birth")
	private String dob;

	@JsonProperty("profile_picture_url")
//	@NotEmpty(message = "Profile Picture Url is required field")
	private String profilePictureUrl;

	@JsonProperty("programming_language")
	private ProgrammingLanguage programmingLanguage;

	@JsonProperty("present_address")
	private String presentAddress;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public ProgrammingLanguage getProgrammingLanguage() {
        return programmingLanguage;
    }

    public void setProgrammingLanguage(ProgrammingLanguage programmingLanguage) {
        this.programmingLanguage = programmingLanguage;
    }

    public String getPresentAddress() {
        return presentAddress;
    }

    public void setPresentAddress(String presentAddress) {
        this.presentAddress = presentAddress;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", contactNumber=" + contactNumber + ", email=" + email
                + ", gender=" + gender + ", dob=" + dob + ", profilePictureUrl=" + profilePictureUrl
                + ", programmingLanguage=" + programmingLanguage + ", presentAddress=" + presentAddress + "]";
    }

}

<?php

class SchoolView {
    public static function displayMenu() {
        echo "Welcome to School Registration System\n";
        echo "1. Register Student\n";
        echo "2. View All Students\n";
        echo "3. Exit\n";
    }

    public static function getStudentInfo() {
        echo "Enter student name: ";
        $name = trim(fgets(STDIN));
        echo "Enter student age: ";
        $age = trim(fgets(STDIN));
        echo "Enter student grade: ";
        $grade = trim(fgets(STDIN));
        return [$name, $age, $grade];
    }

    public static function displayStudents($students) {
        echo "\nList of Students:\n";
        foreach ($students as $student) {
            echo "Name: " . $student->getName() . ", Age: " . $student->getAge() . ", Grade: " . $student->getGrade() . "\n";
        }
    }
}
?>
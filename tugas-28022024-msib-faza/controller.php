<?php

require_once 'Student.php';
require_once 'view.php';

class SchoolController {
    private $school;

    public function __construct() {
        $this->school = [];
    }

    public function run() {
        while (true) {
            SchoolView::displayMenu();
            $choice = trim(fgets(STDIN));

            switch ($choice) {
                case '1':
                    $info = SchoolView::getStudentInfo();
                    $student = new Student($info[0], $info[1], $info[2]);
                    $this->school[] = $student;
                    echo "Student registered successfully!\n";
                    break;
                case '2':
                    SchoolView::displayStudents($this->school);
                    break;
                case '3':
                    echo "Exiting program...\n";
                    exit();
                default:
                    echo "Invalid choice. Please try again.\n";
            }
        }
    }
}

$controller = new SchoolController();
$controller->run();

?>
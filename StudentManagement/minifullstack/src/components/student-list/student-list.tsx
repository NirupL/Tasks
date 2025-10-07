import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'student-list',
  styleUrl: 'student-list.css',
  shadow: true,
})
export class StudentList {
  @State() students: any[] = [];
  @State() name: string = '';
  @State() email: string = '';
  @State() editingId: number | null = null; // track if editing

  baseUrl: string = 'http://localhost:8080/SpringHibProj/api/students';

  // Load all students
  async componentWillLoad() {
    await this.fetchStudents();
  }

  async fetchStudents() {
    try {
      const res = await fetch(this.baseUrl);
      if (!res.ok) throw new Error('Failed to fetch');
      this.students = await res.json();
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  }

  // Add new student
  async addStudent() {
    const newStudent = { name: this.name, email: this.email };

    try {
      const res = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent),
      });
      if (!res.ok) throw new Error('Failed to add student');
      this.clearForm();
      await this.fetchStudents();
    } catch (err) {
      console.error('Error adding student:', err);
    }
  }

  // Delete student
  async deleteStudent(id: number) {
    if (!confirm('Are you sure you want to delete this student?')) return;

    try {
      const res = await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      await this.fetchStudents();
    } catch (err) {
      console.error('Error deleting student:', err);
    }
  }

  // Set up editing mode
  editStudent(student: any) {
    this.editingId = student.id;
    this.name = student.name;
    this.email = student.email;
  }

  // Update existing student
  async updateStudent() {
    const updatedStudent = { name: this.name, email: this.email };

    try {
      const res = await fetch(`${this.baseUrl}/${this.editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedStudent),
      });
      if (!res.ok) throw new Error('Failed to update student');
      this.clearForm();
      await this.fetchStudents();
    } catch (err) {
      console.error('Error updating student:', err);
    }
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.editingId = null;
  }

  render() {
    return (
      <div class="student-list-container">
        <h2 class="title">Student Management</h2>

        <ul class="students-list">
          {this.students.map(s => (
            <li class="student-item">
              <span class="student-id">{s.id}</span> -
              <span class="student-name">{s.name}</span> (
              <span class="student-email">{s.email}</span>)
              <div class="actions">
                <button class="edit-btn" onClick={() => this.editStudent(s)}>Edit</button>
                <button class="delete-btn" onClick={() => this.deleteStudent(s.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        <h3 class="form-title">{this.editingId ? 'Edit Student' : 'Add Student'}</h3>
        <div class="form-group">
          <input
            class="input-field"
            type="text"
            placeholder="Name"
            value={this.name}
            onInput={(e: any) => (this.name = e.target.value)}
          />
          <input
            class="input-field"
            type="text"
            placeholder="Email"
            value={this.email}
            onInput={(e: any) => (this.email = e.target.value)}
          />
        </div>

        {this.editingId ? (
          <div>
            <button class="update-btn" onClick={() => this.updateStudent()}>Update</button>
            <button class="cancel-btn" onClick={() => this.clearForm()}>Cancel</button>
          </div>
        ) : (
          <button class="save-btn" onClick={() => this.addStudent()}>Save</button>
        )}
      </div>
    );
  }
}

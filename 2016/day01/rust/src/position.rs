use std::hash::{Hash, Hasher};

pub struct Step {
    pub turn: Turn,
    pub count: u32,
}

#[derive(Debug)]
pub enum Turn {
    R,
    L,
}

#[derive(Debug, Eq, PartialEq, Clone)]
pub enum Direction {
    N,
    S,
    E,
    W,
}

#[derive(Debug, Eq, Clone)]
pub struct Pos {
    pub x: i32,
    pub y: i32,
    pub direction: Direction,
}

impl PartialEq for Pos {
    fn eq(&self, other: &Self) -> bool {
        self.x == other.x && self.y == other.y
    }
}

impl Hash for Pos {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.x.hash(state);
        self.y.hash(state);
    }
}

impl Pos {
    pub fn go_north(&mut self, distance: u32) {
        self.y += distance as i32;
    }

    pub fn go_east(&mut self, distance: u32) {
        self.x += distance as i32;
    }

    pub fn go_west(&mut self, distance: u32) {
        self.x -= distance as i32;
    }

    pub fn go_south(&mut self, distance: u32) {
        self.y -= distance as i32;
    }
    pub fn turn_right(&mut self) {
        match self.direction {
            Direction::N => self.direction = Direction::E,
            Direction::S => self.direction = Direction::W,
            Direction::E => self.direction = Direction::S,
            Direction::W => self.direction = Direction::N,
        };
    }
    pub fn turn_left(&mut self) {
        match self.direction {
            Direction::N => self.direction = Direction::W,
            Direction::S => self.direction = Direction::E,
            Direction::E => self.direction = Direction::N,
            Direction::W => self.direction = Direction::S,
        };
    }
}

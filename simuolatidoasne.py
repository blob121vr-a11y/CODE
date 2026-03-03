import pygame
import random
import math

pygame.init()
last_collision_time = {}

WIDTH, HEIGHT = 800, 600
FPS = 60
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Bouncing Squares Simulation")
clock = pygame.time.Clock()

class Square:
    def __init__(self, x, y, size=20, vx=None, vy=None):
        self.x = x
        self.y = y
        self.size = size
        self.vx = vx if vx is not None else random.uniform(-3, 3)
        self.vy = vy if vy is not None else random.uniform(-3, 3)
        self.color = (random.randint(50, 255), random.randint(50, 255), random.randint(50, 255))
    
    def update(self):
        self.x += self.vx
        self.y += self.vy
        
        # Bounce off walls
        if self.x - self.size // 2 < 0 or self.x + self.size // 2 > WIDTH:
            self.vx *= -1
            self.x = max(self.size // 2, min(WIDTH - self.size // 2, self.x))
        
        if self.y - self.size // 2 < 0 or self.y + self.size // 2 > HEIGHT:
            self.vy *= -1
            self.y = max(self.size // 2, min(HEIGHT - self.size // 2, self.y))
    
    def draw(self, surface):
        pygame.draw.rect(surface, self.color, (self.x - self.size // 2, self.y - self.size // 2, self.size, self.size))
    
    def collides_with(self, other):
        dx = self.x - other.x
        dy = self.y - other.y
        distance = math.sqrt(dx**2 + dy**2)
        return distance < (self.size + other.size) / 2

squares = [Square(random.randint(50, WIDTH - 50), random.randint(50, HEIGHT - 50)) for _ in range(5)]

running = True
while running:
    clock.tick(FPS)
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    for square in squares:
        square.update()
    
    # Check collisions
    new_squares = []
    for i, sq1 in enumerate(squares):
        for sq2 in squares[i + 1:]:
            if sq1.collides_with(sq2):
                new_squares.append(Square(sq1.x, sq1.y, sq1.size, sq1.vx, sq1.vy))
                new_squares.append(Square(sq2.x, sq2.y, sq2.size, sq2.vx, sq2.vy))
    
    squares.extend(new_squares)
    
    screen.fill((0, 0, 0))
    for square in squares:
        square.draw(screen)
    
    pygame.display.flip()

pygame.quit()
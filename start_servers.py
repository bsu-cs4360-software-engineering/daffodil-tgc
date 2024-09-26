import subprocess
import webbrowser
import time
import platform
import os

def run_command_in_terminal(command, directory):
    if platform.system() == "Windows":
        return subprocess.Popen(f" cd /d {directory} && {command}", shell=True)
    elif platform.system() == "Darwin":  # macOS
        return subprocess.Popen(["osascript", "-e", f'tell app "Terminal" to do script "cd {directory} && {command}"'])
    else:  # Linux and other Unix-like systems
        return subprocess.Popen(["x-terminal-emulator", "-e", f"cd {directory} && {command}"])


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    backend_directory = os.path.join(script_dir, "./backend")
    frontend_directory = os.path.join(script_dir, "./frontend/tcg")

    backend_directory = os.path.normpath(backend_directory)
    frontend_directory = os.path.normpath(frontend_directory)


    
    npm_install_process = run_command_in_terminal("npm i", backend_directory)
    npm_install_process.wait()

    npm_install_process = run_command_in_terminal("npm i", frontend_directory)
    npm_install_process.wait()

    time.sleep(5)

    run_command_in_terminal("npm start", backend_directory)
    time.sleep(1)

    run_command_in_terminal("npm start", frontend_directory)
    time.sleep(2)

    webbrowser.open("http://localhost:5173")

if __name__ == "__main__":
    main()
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/time', methods=['GET', 'POST'])
def get_time():
    if request.method == 'POST':
        uinput: str = request.form['utime']
        times = uinput.split('.')
        # TODO 데이터베이스에 저장하는 기능 제작
        ptime = ",".join(times)
    elif request.method == 'GET':
        return redirect(url_for('now_time'))
    return render_template('time.html', ptime=ptime)


@app.route('/now')
def now_time():
    return render_template('now.html')


@app.route('/uniii')
def uniii_time():
    return render_template('uniii.html', ptime="2020,03,16,10,00,00")


if __name__ == '__main__':
    app.run()

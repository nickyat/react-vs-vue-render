vue-qusar: ab -n 1000 http://localhost:3000/test

Document Path:          /test
Document Length:        542045 bytes

Concurrency Level:      1
Time taken for tests:   9.692 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      542275000 bytes
HTML transferred:       542045000 bytes
Requests per second:    103.17 [#/sec] (mean)
Time per request:       9.692 [ms] (mean)
Time per request:       9.692 [ms] (mean, across all concurrent requests)
Transfer rate:          54637.54 [Kbytes/sec] received

next: ab -n 1000 http://localhost:3000/test/test
Document Path:          /test/test
Document Length:        621955 bytes

Concurrency Level:      1
Time taken for tests:   3.456 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      622183000 bytes
HTML transferred:       621955000 bytes
Requests per second:    289.37 [#/sec] (mean)
Time per request:       3.456 [ms] (mean)
Time per request:       3.456 [ms] (mean, across all concurrent requests)
Transfer rate:          175819.97 [Kbytes/sec] received
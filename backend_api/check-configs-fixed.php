<?php
require __DIR__ . '/vendor/autoload.php';

// Load Laravel environment
$app = new Illuminate\Foundation\Application(
    dirname(__DIR__)
);

foreach (glob('config/*.php') as $file) {
    echo "=== Testing $file ===\n";
    try {
        $config = require $file;
        if (!is_array($config)) {
            echo "ERROR: Not an array. Type: " . gettype($config) . "\n";
            var_dump($config);
        } else {
            echo "OK: Is array\n";
        }
    } catch (Exception $e) {
        echo "EXCEPTION: " . $e->getMessage() . "\n";
    }
    echo "\n";
}
